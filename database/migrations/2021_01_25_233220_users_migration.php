<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UsersMigration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        /**
         * We create the table users with their respective columns and their foreign keys.
         */
        Schema::create("users", function(Blueprint $table){
            $table->increments("id");
            $table->string("uid");
            $table->string("fullname");
            $table->string("email")->unique();
            $table->string("contraseña");
            $table->string("password");
            $table->unsignedInteger("document_type_id");
            $table->string("document");
            $table->unsignedInteger("city_id");
            $table->unsignedInteger("status_id");
            $table->dateTime("verifited_at");
            $table->string("verification_code");
            $table->timestamps();

            $table->foreign("document_type_id")->references("id")->on("document_types")->onUpdate("no action")->onDelete("no action");
            $table->foreign("city_id")->references("id")->on("cities")->onUpdate("no action")->onDelete("no action");
            $table->foreign("status_id")->references("id")->on("statuses")->onUpdate("no action")->onDelete("no action");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists("users");
    }
}
