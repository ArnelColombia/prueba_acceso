<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DocumentTypesMigration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        /**
         * We create the table types of documents with their respective columns and their foreign keys.
         */
        Schema::create("document_types", function(Blueprint $table){
            $table->increments("id");
            $table->string("name");
            $table->string("acronym");
            $table->unsignedInteger("status_id");
            $table->timestamps();
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
        //
    }
}
