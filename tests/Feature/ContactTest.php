<?php

namespace Tests\Feature;

use App\Models\ContactMessage;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ContactTest extends TestCase
{
    use RefreshDatabase;

    public function test_contact_form_stores_a_valid_message(): void
    {
        $response = $this->post('/contact', [
            'name' => 'Jane Doe',
            'email' => 'jane@example.com',
            'subject' => 'Project inquiry',
            'message' => 'I would love to discuss a project with you.',
        ]);

        $response->assertRedirect();

        $this->assertDatabaseHas('contact_messages', [
            'name' => 'Jane Doe',
            'email' => 'jane@example.com',
            'subject' => 'Project inquiry',
            'message' => 'I would love to discuss a project with you.',
        ]);
    }

    public function test_contact_form_rejects_invalid_submission(): void
    {
        $response = $this->post('/contact', [
            'name' => '',
            'email' => 'not-an-email',
            'subject' => '',
            'message' => '',
        ]);

        $response->assertInvalid(['name', 'email', 'subject', 'message']);

        $this->assertSame(0, ContactMessage::query()->count());
    }
}
