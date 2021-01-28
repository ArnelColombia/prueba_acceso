<?php

namespace Database\Seeders;

use App\Models\DocumentType;
use Illuminate\Database\Seeder;

class DocumentTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DocumentType::create([
            "name" => "Cedula De Ciudadania",
            "acronym" => "CC",
            "status_id" => 1
        ]);

        DocumentType::create([
            "name" => "Cedula De Extranjeria",
            "acronym" => "CE",
            "status_id" => 1
        ]);

        DocumentType::create([
            "name" => "Pasaporte",
            "acronym" => "PS",
            "status_id" => 1
        ]);

        DocumentType::create([
            "name" => "NIT",
            "acronym" => "NIT",
            "status_id" => 1
        ]);

        DocumentType::create([
            "name" => "RUT",
            "acronym" => "RUT",
            "status_id" => 1
        ]);
    }
}
