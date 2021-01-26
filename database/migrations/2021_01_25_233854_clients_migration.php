<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ClientsMigration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("customers", function(Blueprint $table){
            $table->increments("id");
            $table->string("fullname");
            $table->unsignedInteger("document_type_id");
            $table->string("document");
            $table->unsignedInteger("city_id");
            $table->unsignedInteger("status_id");
            $table->timestamps();

            $table->foreign("document_type_id")->references("id")->on("document_types")->onDelete("no action")->onUpdate("no action");
            $table->foreign("city_id")->references("id")->on("cities")->onDelete("no action")->onUpdate("no action");
            $table->foreign("status_id")->references("id")->on("statuses")->onDelete("no action")->onUpdate("no action");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists("customers");
    }
}
