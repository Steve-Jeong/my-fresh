export default function login() {
  return (
    <form class="flex flex-col items-center" method="post" action="/api/login">
      <div class="m-1 border border-blue-700">
        <input class="w-24" type="text" name="username" placeholder="Username" />
      </div>
      <div class="m-1 border border-blue-700">
        <input class="w-24" type="password" name="password" placeholder="Password" />
      </div>
      <button class="m-1 px-1 border rounded-lg text-sm text-gray-100" type="submit">Submit</button>
    </form>
  );
}