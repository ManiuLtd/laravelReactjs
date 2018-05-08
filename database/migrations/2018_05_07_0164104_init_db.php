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
            $table->string('username')->unique();
            $table->string('firstname', 50)->nullable();
            $table->string('lastname', 50)->nullable();
            $table->string('email')->unique();
            $table->string('password')->nullable();
            $table->string('phone')->nullable();
            $table->string('address', 100)->nullable(); // admin | sale | manager
            $table->boolean('gender')->default(1); // 0: Male | 1: Female
            $table->string('group_name')->nullable();
            $table->string('team_name')->nullable();
            $table->string('job_title')->nullable();
            $table->rememberToken();
            $table->timestamps();
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
