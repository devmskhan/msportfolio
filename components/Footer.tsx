export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200/30">
      <div className="container py-10 text-sm text-slate-500">
        <p>© {new Date().getFullYear()} MS. All rights reserved.</p>
      </div>
    </footer>
  );
}
