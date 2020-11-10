<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Symfony\Polyfill\Ctype\Ctype;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            'Automotive',
            'Electronic',
            'Computer & Gadget',
            'Property',
            'Sport',
            'Music',
            'Fashion',
        ];

        foreach ($categories as $category) {
            Category::create(['category' => $category]);
        }
    }
}
