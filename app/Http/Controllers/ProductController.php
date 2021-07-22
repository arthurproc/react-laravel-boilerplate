<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function list()
    {
        return \App\Http\Resources\ProductResource::collection(\App\Models\Product::paginate(6));
    }

    public function delete($id)
    {
        $productToDelete = \App\Models\Product::findOrFail($id);

        if ($productToDelete->delete())
        {
            return response()->json([
                "message" => "Product deleted successfully"
            ]);
        }
        return response()->json([
            "message" => "Error deleting product, please try again later"
        ])->status(500);
    }
}
