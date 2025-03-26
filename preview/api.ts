import { Hono } from "jsr:@hono/hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello, Hono!");
});

app.get("/api", (c) => {
  return c.json({ message: "Welcome to the API" });
});

app.get("/api/users", (c) => {
  const users = [
    { id: 2 },
    { id: 8 },
    { id: 3 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 4 },
    { id: 1 },
    { id: 9 },
    { id: 10 },
  ];
  return c.json(users);
});

app.get("/api/users/:id", (c) => {
  const id = c.req.param("id");
  const user = { id, name: `User ${id}` };
  return c.json(user);
});

app.post("/api/users-batch", async (c) => {
  const allUsers = new Array(20).fill(0).map((_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    username: `user_${i + 1}`,
  }));

  const { ids } = await c.req.json();
  const users = allUsers.filter((u) => ids.includes(u.id));
  return c.json(users, 200);
});

Deno.serve({ port: 4001 }, app.fetch);
