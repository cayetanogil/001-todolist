import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="mx-auto flex min-h-screen max-w-xl flex-col text-slate-800">
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
