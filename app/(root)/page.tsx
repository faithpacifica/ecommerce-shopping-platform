// const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const Homepage = async() => {
  // await delay(2000); // Simulate a delay of 2 second for test
  return (
    <div className=" text-6xl flex min-h-screen flex-col items-center justify-between p-24 text-amber-600">Homepage</div>
  )
}

export default Homepage