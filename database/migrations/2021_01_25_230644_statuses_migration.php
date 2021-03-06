<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class StatusesMigration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        /**
         * We create the table statuses with their respective columns.
         */
        Schema::create("statuses", function(Blueprint $table){
            $table->increments("id");
            $table->string("name");
            $table->string("model");
            $table->string("color");
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
        Schema::dropIfExists("statuses");
    }
}
