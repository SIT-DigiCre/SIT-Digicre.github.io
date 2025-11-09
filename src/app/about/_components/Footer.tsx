export default function Footer() {
  return (
    <footer className="bg-[#202020] p-4 text-center text-white">
      <small>
        © {`2004-${new Date().getFullYear()}`} <wbr />
        芝浦工業大学 デジクリ
      </small>
    </footer>
  );
}

