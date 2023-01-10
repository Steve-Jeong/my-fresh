
export default function Layout({children} : any) {
  return (
    <div class="container flex flex-col h-screen max-w-md mx-auto">
      <div class="flex justify-center bg-blue-500 w-full">
        <span class="py-2 text-2xl text-white font-bold">주차 이력 정보</span> 
      </div>
      {children}
      <div class="mt-2 flex justify-center bg-blue-500 w-full p-1">
        <span class="text-sm text-gray-200">&copy; 2023 Top Soft</span>
      </div>
    </div>
  )
}

