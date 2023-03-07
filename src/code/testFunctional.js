// import { memo } from 'react'

// const TestFunctional = memo(function TestFunctional(props) {
//   console.warn("TestFunctional 1")
//   return (
//     <div>
//       {console.warn("TestFunctional 2")}
//     </div>
//   )
// });
// export default TestFunctional




import React, { useEffect, useLayoutEffect, useState } from 'react'
export default function TestFunctional() {
  const [value, setValue] = useState(0)
  // useEffect(() => { console.warn("value from useEffect : ", value); }, [value])
  useLayoutEffect(() => { console.warn("value from useLayoutEffect : ", value) }, [value])
  console.warn("TestFunctional 1")
  return (
    <div onClick={() => { setValue(value + 1) }} style={{ marginTop: "300px" }}>abc
      {console.warn("TestFunctional 2", value)}
    </div>
  )
}