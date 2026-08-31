<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Models\ContactMessage;
use Illuminate\Http\RedirectResponse;

class ContactController extends Controller
{
    /**
     * Validate and store a message submitted through the contact form.
     */
    public function store(ContactRequest $request): RedirectResponse
    {
        ContactMessage::query()->create($request->validated());

        return back()->with('success', 'Your message has been sent. I will get back to you soon.');
    }
}
