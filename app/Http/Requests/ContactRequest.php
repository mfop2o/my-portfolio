<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactRequest extends FormRequest
{
    /**
     * The contact form is publicly accessible.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:100'],
            'email' => ['required', 'email', 'max:255'],
            'subject' => ['required', 'string', 'max:200'],
            'project_type' => ['required', 'string', 'in:business-website,web-application,dashboard,api-backend,custom-software,other'],
            'budget' => ['required', 'string', 'in:under-500,500-1000,1000-3000,3000-plus,lets-discuss'],
            'message' => ['required', 'string', 'max:5000'],
        ];
    }
}