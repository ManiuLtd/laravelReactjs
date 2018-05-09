<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class InitDb extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('username', 50)->unique()->collation('utf8_unicode_ci');
            $table->string('firstname', 30)->nullable()->collation('utf8_unicode_ci');
            $table->string('lastname', 30)->nullable()->collation('utf8_unicode_ci');
            $table->string('email', 50)->unique()->collation('utf8_unicode_ci');
            $table->string('password', 100)->nullable()->collation('utf8_unicode_ci');
            $table->string('phone', 20)->nullable()->collation('utf8_unicode_ci');
            $table->string('address', 100)->nullable()->collation('utf8_unicode_ci'); // admin | sale | manager

            $table->tinyInteger('gender')->default(0); // 0: Male | 1: Female
            $table->boolean('actived', 1)->default(0); // 0: false | 1: true
            
            // test
            $table->text('description')->nullable()->collation('utf8_unicode_ci');
            $table->date('date')->nullable();
            $table->dateTime('dateTime')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->smallInteger('votes')->nullable();
            
            $table->json('options')->nullable();

            $table->rememberToken();

            $table->timestamps();
            // $table->collation = 'utf8_unicode_ci';
            $table->engine = 'InnoDB';
        });

        Schema::create('groups', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('type', 20);
            $table->string('parent', 20)->nullable();
            $table->string('status', 20);

            $table->index('type');
            $table->index('parent');
            $table->index('status');
            $table->timestamps();
        });

        Schema::create('group_user', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->integer('group_id')->unsigned();

            $table->foreign('user_id')
                  ->references('id')->on('users')
                  ->onDelete('cascade');  

             $table->foreign('group_id')
                  ->references('id')->on('groups')
                  ->onDelete('cascade');  

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('group_user');
        Schema::drop('users');
        Schema::drop('groups');
    }
}
