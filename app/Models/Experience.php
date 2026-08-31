<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Carbon;

/**
 * @property-read string $period Human-readable date range, e.g. "Mar 2025 — Present"
 */

class Experience extends Model
{
    use HasFactory;

    protected $fillable = [
        'company',
        'position',
        'description',
        'technologies',
        'start_date',
        'end_date',
        'current',
        'sort_order',
    ];

    protected function casts(): array
    {
        return [
            'technologies' => 'array',
            'start_date' => 'date',
            'end_date' => 'date',
            'current' => 'boolean',
            'sort_order' => 'integer',
        ];
    }

    public function scopeOrdered(Builder $query): Builder
    {
        return $query->orderBy('sort_order')->orderBy('id');
    }

    protected $appends = ['period'];

    /**
     * Human-readable period, e.g. "Mar 2025 — Present".
     */
    protected function getPeriodAttribute(): string
    {
        $start = $this->start_date instanceof Carbon
            ? $this->start_date->format('M Y')
            : Carbon::parse($this->start_date)->format('M Y');

        $end = $this->current
            ? 'Present'
            : ($this->end_date ? Carbon::parse($this->end_date)->format('M Y') : '—');

        return "{$start} — {$end}";
    }
}
