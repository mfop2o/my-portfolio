<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Certificate extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'issuer',
        'description',
        'image',
        'certificate_url',
        'year',
        'sort_order',
    ];

    protected function casts(): array
    {
        return [
            'year' => 'integer',
            'sort_order' => 'integer',
        ];
    }

    public function scopeOrdered(Builder $query): Builder
    {
        return $query->orderByDesc('year')->orderBy('sort_order')->orderBy('id');
    }
}
