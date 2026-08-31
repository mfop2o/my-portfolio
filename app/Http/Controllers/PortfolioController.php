<?php

namespace App\Http\Controllers;

use App\Models\Certificate;
use App\Models\Experience;
use App\Models\Project;
use App\Models\Service;
use Inertia\Inertia;
use Inertia\Response;

class PortfolioController extends Controller
{
    /**
     * Render the public landing page.
     */
    public function home(): Response
    {
        $projects = Project::query()
            ->featured()
            ->ordered()
            ->get();

        $experiences = Experience::query()
            ->ordered()
            ->get();

        $services = Service::query()
            ->active()
            ->ordered()
            ->get();

        $certificates = Certificate::query()
            ->ordered()
            ->get();

        return Inertia::render('Home', [
            'projects' => $projects,
            'experiences' => $experiences,
            'services' => $services,
            'certificates' => $certificates,
        ]);
    }

    /**
     * Render a single project case study.
     *
     * Future work: build the ProjectCaseStudy page and fleshed-out content.
     * The route is already wired so the architecture is ready for it.
     */
    public function show(string $slug): Response
    {
        $project = Project::query()
            ->where('slug', $slug)
            ->firstOrFail();

        return Inertia::render('Projects/Show', [
            'project' => $project,
        ]);
    }
}
