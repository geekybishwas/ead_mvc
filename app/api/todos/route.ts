// src/app/api/todos/route.ts
import { NextRequest, NextResponse } from "next/server";
import { TodoModel } from "../../models/Todo";
import { TodoData } from "@/lib/data";

// GET /api/todos - Get all todos
export async function GET() {
  try {
    const todos = TodoData.getAll();
    return NextResponse.json({ success: true, data: todos });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch todos" },
      { status: 500 }
    );
  }
}

// POST /api/todos - Create a new todo
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title } = body;

    // Validate using model
    const errors = TodoModel.validate({ title });
    if (errors.length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // Create todo using model
    const newTodo = TodoModel.create(title);
    const createdTodo = TodoData.create(newTodo);

    return NextResponse.json(
      { success: true, data: createdTodo },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to create todo" },
      { status: 500 }
    );
  }
}

// PUT /api/todos - Update a todo
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Todo ID is required" },
        { status: 400 }
      );
    }

    const updatedTodo = TodoData.update(id, updates);

    if (!updatedTodo) {
      return NextResponse.json(
        { success: false, error: "Todo not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: updatedTodo });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to update todo" },
      { status: 500 }
    );
  }
}

// DELETE /api/todos - Delete a todo
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Todo ID is required" },
        { status: 400 }
      );
    }

    const deleted = TodoData.delete(id);

    if (!deleted) {
      return NextResponse.json(
        { success: false, error: "Todo not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: "Todo deleted" });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to delete todo" },
      { status: 500 }
    );
  }
}
