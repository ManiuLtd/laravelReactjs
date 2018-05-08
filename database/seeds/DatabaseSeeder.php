<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        for ($i=1; $i < 10; $i++) { 
        	DB::table('users')->insert([
	            'name' => 'Username_'.$i,
	            'email' => str_random(10).'@gmail.com',
	            'remember_token' => str_random(20),
	            'password' => bcrypt('secret'),
	        ]);
        }
    }
}
