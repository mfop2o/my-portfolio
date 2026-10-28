<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Add rich case-study fields to the projects table.
     *
     * These fields are all nullable so existing project records remain valid.
     */
    public function up(): void
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->text('problem')->nullable()->after('description');
            $table->text('solution')->nullable()->after('problem');
            $table->text('my_role')->nullable()->after('solution');
            $table->json('highlights')->nullable()->after('my_role');
            $table->text('architecture_notes')->nullable()->after('highlights');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->dropColumn(['problem', 'solution', 'my_role', 'highlights', 'architecture_notes']);
        });
    }
};
