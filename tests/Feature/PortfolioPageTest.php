<?php

namespace Tests\Feature;

use App\Models\Project;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class PortfolioPageTest extends TestCase
{
    use RefreshDatabase;

    public function test_home_page_renders_the_landing_page(): void
    {
        $response = $this->get('/');

        $response
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page->component('Home'));
    }

    public function test_project_case_study_page_renders_for_existing_project(): void
    {
        $project = Project::factory()->create();

        $response = $this->get("/projects/{$project->slug}");

        $response
            ->assertOk()
            ->assertInertia(
                fn (Assert $page) => $page
                    ->component('Projects/Show')
                    ->where('project.slug', $project->slug)
            );
    }

    public function test_project_case_study_page_returns_404_for_unknown_slug(): void
    {
        $this->get('/projects/does-not-exist')->assertNotFound();
    }
}
