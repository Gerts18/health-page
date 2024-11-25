'use client'

const Data = () => {

    const getProfile = async () => {
        const response = await fetch('/api/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });

        const result = await response.json();
        console.log(result)
    }
    


  return (
    <div>

    <button onClick={getProfile}>Click me</button>

    </div>
  )
}

export default Data