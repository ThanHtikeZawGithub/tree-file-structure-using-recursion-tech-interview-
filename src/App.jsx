import './App.css'
import { useState } from 'react'

  const files = {
    children: [
      {
        name: 'node_modules',
        children: [
          {
            name: 'bin',
            children:[
              {
                name: 'trash',
              },
              {
                name:'can',
              }
            ]
          }
        ]
      },
      {
        name: 'packagejson',
      },
      {
        name: 'vite config'
      }
    ]
  }
  
  function Entry ({entry, depth}) {
    const [selected, setSelected] = useState(false);
    return (
      <>
    <button className='btn' onClick={()=> setSelected(!selected)}>
      {entry.children && '+'}
      {entry.name}
      </button>
      {selected && (
      <div style={{paddingLeft: `${depth *10}px`}}>
      {entry.children?.map(entry => (
        <Entry entry = {entry} depth={depth + 1}/>
      ))}
      </div>
      )}
      </>
    
  )}

  function App() {
  return (
    <div className="App">
       {files.children.map((entry) => (
            <Entry entry={entry} depth={1} />
       ))}  
    </div>
  )
}

export default App;
