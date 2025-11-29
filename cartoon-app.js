class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Oops! Something went wrong</h1>
            <p className="text-gray-600 mb-4">Don't worry, let's try again!</p>
            <button onClick={() => window.location.reload()} className="btn-cartoon">
              🔄 Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function CartoonApp() {
  try {
    return (
      <div className="min-h-screen" data-name="cartoon-portfolio-app" data-file="cartoon-app.js">
        <CartoonHeader />
        <CartoonHero />
        <CartoonAbout />
        <CartoonSkills />
        <CartoonContact />
      </div>
    );
  } catch (error) {
    console.error('Cartoon App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <CartoonApp />
  </ErrorBoundary>
);