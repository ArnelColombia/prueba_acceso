<?php

namespace Database\Seeders;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            "uid" => Hash::make("Nelson Arevalo"),
            "fullname" => "Nelson Arevalo",
            "email" => "nelson.arevalo2021@outlook.com",
            "password" => Hash::make("password"),
            "contraseña" => Hash::make("nelson.arevalo2021@outlook.com"),
            "document_type_id" => 1,
            "document" => "1018485712",
            "city_id" => 1,
            "status_id" => 1,
            "verifited_at" => Carbon::parse("00-00-00 00:00:00")->format("Y-m-d H:i:s"),
            "verification_code" => 0
        ]);

        $user->assignRole("Super Admin");
    }
}
