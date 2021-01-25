<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CitiesMigration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        /**
         * We create the table cities with their respective columns and their foreign keys.
         */
        Schema::create("cities", function(Blueprint $table){
            $table->increments("id");
            $table->string("name");
            $table->string("acronym");
            $table->unsignedInteger("status_id");
            $table->foreign("status_id")->references("id")->on('statuses')->onDelete("no action")->onUpdate("no action");
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
        Schema::dropIfExists("cities");
    }
}
