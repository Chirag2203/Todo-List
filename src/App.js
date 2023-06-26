import './App.css';

function App() {
  return (
    <>
    <form className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input type="text" id="item" />
        <button className="btn">Add</button>

      </div>

    </form>
    <h1 className="header">Todo List</h1>
    <ul className='list'>
      <li>
        <label htmlFor="">
          <input type="checkbox"   />
          Item1
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
      <li>
        <label htmlFor="">
          <input type="checkbox"   />
          Item1
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
    </ul>
    </>
  );
}

export default App;
