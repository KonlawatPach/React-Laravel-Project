<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Pingtest extends Controller
{
    public function main()
    {
        try {
            // Product::select('id', 'title', 'description', 'image')->get();

            return response()->json([
                'message' => 'Pong!'
            ]);
        } catch(\Exception $e) {
            return response()->json([
                'message' => 'Something does wrong while creating a product.'
            ], 500);
        }
    }
}
