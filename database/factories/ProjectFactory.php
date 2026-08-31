<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = $this->faker->words(3, true);

        return [
            'title' => $title,
            'slug' => Str::slug($title).'-'.Str::lower(Str::random(6)),
            'category' => $this->faker->randomElement(['Web App', 'SaaS', 'API', 'Landing Page']),
            'short_description' => $this->faker->sentence(),
            'description' => $this->faker->paragraphs(3, true),
            'technologies' => ['Laravel', 'React', 'TypeScript'],
            'image' => null,
            'github_url' => null,
            'live_url' => null,
            'featured' => true,
            'sort_order' => 0,
        ];
    }
}
