const headling = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'Hello React'),
    React.createElement('h1', {}, 'Hello React2'),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, 'Hello React3'),
    React.createElement('h1', {}, 'Hello React4'),
  ]),
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(headling)
