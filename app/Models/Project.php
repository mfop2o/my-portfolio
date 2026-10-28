<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'category',
        'short_description',
        'description',
        'problem',
        'solution',
        'my_role',
        'highlights',
        'architecture_notes',
        'technologies',
        'image',
        'github_url',
        'live_url',
        'featured',
        'sort_order',
    ];

    protected function casts(): array
    {
        return [
            'technologies' => 'array',
            'highlights' => 'array',
            'featured' => 'boolean',
            'sort_order' => 'integer',
        ];
    }

    public function scopeFeatured(Builder $query): Builder
    {
        return $query->where('featured', true);
    }

    public function scopeOrdered(Builder $query): Builder
    {
        return $query->orderBy('sort_order')->orderBy('id');
    }

    public function routeUrl(): string
    {
        return route('projects.show', $this->slug);
    }
}
