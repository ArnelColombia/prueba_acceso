<?php

namespace Database\Seeders;

use App\Models\Status;
use Illuminate\Database\Seeder;

class StatusesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Status::create([
            "name" => "Activo",
            "model" => "All",
            "color" => "#00bf9a"
        ]);

        Status::create([
            "name" => "Inactivo",
            "model" => "All",
            "color" => "#fd5d93"
        ]);
    }
}
