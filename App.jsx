const phone = "201280288766";

const wa = (msg) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

const services = [
  "تأسيس التكييف",
  "صيانة تكييف",
  "شحن فريون",
  "غسيل كيميكال",
  "فك وتركيب",
  "صيانة شيلر",
  "صيانة شركات"
];

export default function App() {
  return (
    <div dir="rtl" style={{fontFamily:"sans-serif"}}>

      <header style={{padding:30,background:"#0b2a6f",color:"#fff",textAlign:"center"}}>
        <h1>الهندسية للتكييفات</h1>
        <p>صيانة - تأسيس - شحن فريون في القاهرة والجيزة والقاهرة الجديدة</p>

        <div style={{marginTop:15}}>
          <a href={wa("عايز استفسار")} style={{margin:5,color:"#fff"}}>واتساب</a>
          <a href={`tel:${phone}`} style={{margin:5,color:"#fff"}}>اتصال</a>
        </div>
      </header>

      <section style={{padding:20}}>
        <h2 style={{textAlign:"center"}}>خدماتنا</h2>

        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:15}}>
          {services.map((s,i)=>(
            <a key={i} href={wa("أريد خدمة: "+s)}
              style={{padding:15,border:"1px solid #ddd",borderRadius:10,textAlign:"center",textDecoration:"none"}}>
              ❄️ {s}
            </a>
          ))}
        </div>
      </section>

      <footer style={{padding:20,background:"#111",color:"#fff",textAlign:"center"}}>
        الهندسية للتكييفات - القاهرة والجيزة
      </footer>

    </div>
  )
}