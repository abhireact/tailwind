import React from 'react'
import AutomobileImg from './automobileImg.jpg'
// import './Baground/Bagroundimg.css'
import './card/card.css'
export default function Automobile() {
  const imageUrl = AutomobileImg
  return (
    <div>
       
      <section className='h-1/2'>
		 <div className="bgofall" style={{backgroundImage:`url(${imageUrl})`}}>
             <div className="text-2xl">
                 <h1 className='text-4xl text-white'>Automobile</h1>
                 <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis quis quam ipsa deleniti animi officiis voluptas, quidem assumenda porro odit?</p>
             </div>
      
      </div>
    </section>
    <section>
    <div className='text-black p-10 text-lgy'>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem laborum facilis inventore laboriosam itaque repellat sit fuga ipsam nulla est, ea accusamus architecto numquam, officiis eos dicta. Iste, sapiente odit deleniti, tempore fuga repellendus ab quis necessitatibus pariatur debitis voluptatibus omnis quae recusandae tenetur beatae? Atque tempora, ad quia explicabo nesciunt eius nostrum laudantium distinctio tenetur repudiandae praesentium alias numquam at deleniti velit enim obcaecati veritatis repellendus soluta aut recusandae perspiciatis possimus reiciendis qui! Cupiditate necessitatibus facere nemo praesentium dolore eveniet, iste quam omnis laborum architecto ipsa illum! Eveniet totam molestias voluptatem velit esse maxime, minima labore. Voluptatibus culpa nam id temporibus, iusto cumque reiciendis, qui necessitatibus blanditiis dignissimos placeat asperiores repellat. Impedit, aspernatur ullam eum nesciunt nisi, enim officia nulla consequuntur porro laboriosam suscipit incidunt necessitatibus. Nemo sit qui fugiat iure a? Unde sunt labore, ipsam doloremque quos animi laborum! Esse dolore sit impedit fugit a necessitatibus harum voluptas! Perferendis et fuga velit veritatis nam distinctio est, dolorum ab in ipsa. Veniam, hic. Quas ut sed qui repudiandae, assumenda, illo soluta modi rem libero nemo, cumque tempore aliquam? Corrupti labore eos deserunt consequuntur totam, harum dicta quis ratione dignissimos deleniti eum ad similique ullam nobis! Earum itaque praesentium eum.
    </div>
    </section>
    <div >
        <div className="container2">
        <div className="card">
          
            <div className="content2">
                <h1>Lorem, ipsum.</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quae corrupti voluptatibus quidem esse porro hic saepe iste beatae temporibus quam error eaque cum nulla non, velit nihil eum dolore. lorem30</p>
            </div>
        </div>
        <div className="card">
            
            <div className="content2">
                <h1>Lorem, ipsum.</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure nemo architecto suscipit ratione, et, quaerat quisquam ducimus quidem autem fuga dignissimos nesciunt, maxime laborum ea ex beatae mollitia animi. Quia?</p>
            </div>
        </div>
        <div className="card">
           
            <div className="content2">
                <h1 className='text-3xl'>Lorem, ipsum.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae amet, nisi repellendus deleniti, similique voluptate, aliquid dolores molestiae magni vero ullam. Exercitationem voluptatum sunt laborum error, enim maxime doloremque dolorum.</p>
            </div>
        </div>

    </div>
    </div>

    <section className='p-10 text-lg text-gray-600'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis obcaecati cupiditate qui pariatur sequi ipsa quod doloribus tenetur explicabo facilis corrupti, nihil recusandae a dolorem repellendus nesciunt vel architecto inventore quidem vero officiis harum quis dolores. Odit hic veritatis necessitatibus, corporis nemo eos! Ratione amet laborum blanditiis illo sunt, fuga ipsam culpa a vitae expedita perferendis. Esse alias blanditiis est reiciendis provident eaque non omnis debitis neque repellat saepe eligendi, nulla voluptatem vero aspernatur eum, inventore accusantium, veniam perspiciatis officiis aliquam sequi. Voluptatibus ipsa exercitationem, soluta animi velit eos, dignissimos, esse accusamus et quam quo voluptates aliquam neque! Provident impedit dignissimos ducimus adipisci ea modi, placeat, ut blanditiis ab mollitia quisquam ipsa, quo eum similique nemo facere iusto maiores eos veritatis explicabo! Corporis nesciunt doloremque itaque nulla, possimus, molestiae ullam placeat qui excepturi, iusto dolores exercitationem ab. Placeat sed et deserunt obcaecati suscipit ut amet, dolorum maxime alias recusandae dolor error? Labore corrupti illo eveniet a esse quisquam voluptate odio doloremque architecto voluptates doloribus, ipsum ipsam quod harum. Pariatur ipsam dignissimos repudiandae vero fugiat. Nam, explicabo nulla! Id quae commodi cupiditate, nesciunt laborum perspiciatis fuga dicta eius tenetur dolores. Facilis, sed ex? Iure totam nihil quaerat praesentium? Sapiente, quisquam? Repudiandae!
    </section>



      <div className="row py-10 bg-slate-200">
        <div className="col-md-4">
          <div className="card3 card3-1">
            <h3>Ionic Native</h3>
            <p>A curated set of   ES5/ES6/TypeScript wrappers for plugins to easily add any native functionality to your Ionic apps.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card3 card3-2">
            <h3>UI Components</h3>
            <p>Tabs, buttons, inputs, lists, card3s, and more! A comprehensive library
              of mobile UI components, ready to go.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card3 card3-3">
            <h3>Theming</h3>
            <p>Learn how to easily customize and modify your app’s design to fit your
              brand across all mobile platform styles.</p>
          </div>
        </div>
      </div>
      

    </div>
  )
}
