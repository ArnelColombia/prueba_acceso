<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    public function status()
    {
        return $this->belongsTo(Status::class);
    }

    public function city()
    {
        return $this->belongsTo(City::class);
    }

    public function document_type()
    {
        return $this->belongsTo(DocumentType::class);
    }
}
