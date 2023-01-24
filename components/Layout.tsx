
export default function Layout({children, data} : any) {
  return (
    <div class="container flex flex-col h-screen max-w-md mx-auto">
      <div class="grid grid-cols-3 bg-blue-500 w-full">
        <span class="col-start-2 col-end-3 py-2 text-2xl text-white font-bold text-center items-center">주차 이력 정보</span> 
        <div class="text-sm text-gray-600 text-right flex items-center">
          <p class="flex-1 mr-4">
            You currently {data.isAllowed ? "are" : "are not"} logged in.
          </p>
        </div>
      </div>
      {children}
      <div class="mt-2 flex justify-center bg-blue-500 w-full p-1">
        <span class="text-sm text-gray-200">&copy; 2023 Top Soft</span>
      </div>
    </div>
  )
}

