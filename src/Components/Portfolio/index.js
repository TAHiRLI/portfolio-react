import React from 'react';
import $ from "jquery";
import '../../Assets/Vendors/hovertree';
import Skills from '../Skills';


function Portfolio() {
  const sentence1 = "Hi, I'm".split("");
  const sentence2 = "Tahir Tahirli".split("")
  const sentence3 = "Full Stack Web Developer".split("");

 

  const bounce =(e)=>{

    $(e.target).addClass("bounce")

    $(e.target).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){

      $(e.target).removeClass('bounce');

  });
  }

  return (
    <div className='bg-danger p-0'>
    <div id='greeting' className="greeting p-0 ">
      <div className="greeting_content text-start  ">
      <div>
         {sentence1.map((letter, i)=>(
          <span key={i} onMouseEnter={bounce} className={`letter ${letter === " "?"space":""}`}>
            {letter}
          </span>
        ))}
      </div>
          <div>

        {sentence2.map((letter, i)=>(
          <span key={i} onMouseEnter={bounce} className={`letter name ${letter === " "?"space":""}`}>
            {letter}
          </span>
        ))}
          </div>
          <div>

        {sentence3.map((letter, i)=>(
          <span key={i} onMouseEnter={bounce} className={`letter ${letter === " "?"space":""}`}>
            {letter}
          </span>
        ))}
          </div>
      </div>
    <canvas id='canvas'></canvas>
    </div>

    <div>
      <Skills/>
    </div>

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit distinctio facilis ratione dolorum quo dicta inventore ducimus exercitationem architecto deleniti reiciendis ad tempora, ea quod ipsa aspernatur velit corrupti hic eos harum temporibus iure rem porro similique. Quis ullam quaerat repellendus, incidunt omnis iusto recusandae assumenda nisi suscipit tempore atque blanditiis quod odio possimus corrupti cum at, voluptas laborum, quae enim saepe ducimus. Tempora esse illum beatae consequuntur! Repellat dolores, fugit itaque nesciunt iusto sapiente accusantium natus distinctio reiciendis eius incidunt numquam tempora autem placeat aperiam, et odit, accusamus beatae ipsam earum animi veritatis est assumenda optio. Iusto nesciunt inventore ducimus dicta libero. Pariatur quam assumenda repellat sapiente molestiae laudantium architecto. Asperiores mollitia beatae ratione dolorem quibusdam odio sed ad quaerat qui molestias, ipsa omnis repudiandae doloremque aperiam a ipsam dolorum reiciendis quis quo illum! Reprehenderit, similique! Magni dolorum cum dolore reprehenderit minima fugiat unde numquam magnam. Eius provident autem ea velit? Pariatur eligendi sunt nostrum odit quas eius debitis suscipit accusantium mollitia expedita impedit, inventore ipsa, doloremque enim quisquam quae voluptas eum et laudantium ratione provident ex. Explicabo, doloribus nostrum assumenda cum error ad ipsum dignissimos quam voluptatibus molestias unde odit deleniti consectetur minima necessitatibus eius. Saepe voluptate adipisci velit rem, dolor quam reprehenderit, amet consectetur atque recusandae ducimus fugit molestias earum asperiores quasi! Quasi porro rem officia debitis dolorum nemo repudiandae recusandae eos magnam, magni eius corporis nihil harum deserunt quae culpa eligendi? Voluptate suscipit facilis voluptatem, magnam reiciendis deserunt sapiente molestiae eligendi, quisquam omnis rerum voluptas fugiat alias voluptatibus libero aspernatur mollitia amet ab, quos beatae. Eaque animi laboriosam earum laborum perferendis, accusantium, aliquam eligendi ullam doloribus dicta similique quas corporis fuga temporibus ipsa voluptates distinctio. Quae ratione tempora, tempore praesentium saepe illum, fugiat dolorum consequatur placeat rem ab odio deleniti quasi ea amet quibusdam sequi modi ipsam explicabo tenetur numquam reprehenderit debitis eius similique. Consequatur nemo laborum debitis ipsa dolorem, asperiores aut ipsam laudantium unde esse at vel, modi fugit fuga suscipit nesciunt dolor? Ducimus amet perferendis tenetur eligendi eveniet ipsa repellat ratione, labore sed architecto ullam corporis quis dignissimos voluptates accusamus praesentium vitae neque. Adipisci aperiam esse tempore voluptatibus non quaerat mollitia asperiores reprehenderit quasi reiciendis soluta, debitis doloremque eveniet sunt officiis earum. Dolor, quidem architecto, magni porro vero culpa molestias, maiores velit quia nostrum tempore tenetur dolores dolorem eos animi excepturi voluptas quo beatae omnis fugit labore voluptate ab? Accusamus sit magnam quam nulla quos quisquam a vero, magni temporibus, rerum distinctio exercitationem fugiat dignissimos officiis libero obcaecati? Corrupti, eius iure aliquid enim suscipit aliquam commodi? Est, harum modi perferendis ea ullam praesentium illo sint eligendi commodi. Provident consectetur totam voluptatum minima cum, illum expedita, molestiae distinctio ab quod assumenda optio nemo accusantium, natus pariatur deleniti quasi repellat quia maxime itaque error. Qui dolore in molestias magni. Perferendis nesciunt, ex incidunt cupiditate nulla doloremque laboriosam inventore rerum, quae, impedit maxime magnam autem libero quod dolor a placeat qui quasi nihil vel minus. Commodi omnis, perspiciatis nisi quisquam dolorem eos laborum ducimus impedit voluptate eveniet dolore ratione et optio dicta ab odit eum nulla exercitationem blanditiis culpa excepturi. Natus, consectetur consequuntur cum accusantium quisquam voluptatem harum eveniet asperiores aspernatur in et. Voluptatibus voluptates hic repudiandae quis, dignissimos rem magnam. Distinctio doloribus praesentium, qui quos soluta delectus cumque. Possimus numquam sit perspiciatis veritatis quasi exercitationem incidunt est voluptate libero reiciendis corrupti natus assumenda quae non itaque aliquid nam adipisci debitis ipsum, explicabo culpa. In harum nulla incidunt aperiam deserunt cum culpa, illum debitis? Possimus incidunt tempora asperiores accusantium distinctio suscipit architecto quas, perspiciatis unde expedita accusamus, sequi autem sapiente. Sequi, autem? Delectus tempore, illum rerum sapiente reprehenderit quae in repellendus eveniet sequi facilis nostrum sunt enim eaque ipsa natus quo doloremque aspernatur nam earum amet laboriosam quasi iste reiciendis dolorem! Repudiandae eos similique voluptatibus itaque recusandae inventore veniam aspernatur deleniti, alias maiores, quibusdam cum omnis, perspiciatis commodi non placeat magni autem eius laborum molestiae error tempore expedita dicta. Libero perferendis qui sequi nisi. Aliquam odio dicta animi repudiandae! Vero ratione quae quibusdam officia ipsum fugiat eos in quidem labore quaerat officiis ducimus odio, reprehenderit quam aliquam maiores, nihil similique possimus cumque tempore. Asperiores veniam magnam tempora vel, earum quia illum obcaecati sunt maxime culpa rem dolore quas debitis quae ratione molestias. Doloribus animi pariatur quis doloremque sit, repudiandae obcaecati repellendus voluptas corrupti accusantium molestias laudantium voluptatem sequi ducimus culpa delectus assumenda! At sunt magni autem aut ex inventore, laboriosam hic, similique voluptates deleniti et a natus explicabo corporis ducimus in? Exercitationem culpa ullam rerum voluptates delectus tenetur quas consectetur. Similique soluta commodi magni a reiciendis maxime perferendis! Dolorem veritatis doloremque nulla obcaecati amet voluptate quos perspiciatis accusamus eaque officia, veniam impedit provident iste cumque, error ut necessitatibus illo unde similique minus. Voluptatibus corporis officia in ab ratione enim dolor eum sed quas ullam delectus vero placeat architecto excepturi est sequi iure culpa impedit itaque vitae officiis voluptatum, nobis, alias quam! Sint quia cupiditate neque eaque ipsam odit possimus laborum velit saepe! Eum magnam suscipit veritatis nam fugit, asperiores assumenda a quas doloremque iste autem necessitatibus pariatur dicta sint velit. Corporis, blanditiis dolorum adipisci voluptas asperiores, quo ipsum voluptate omnis deleniti labore necessitatibus consequatur debitis iste quia quae, odio excepturi sed aperiam maxime ex ducimus beatae facere nemo repellat. Velit sit accusamus, voluptate eum obcaecati harum illum omnis eos nostrum assumenda architecto quisquam rerum laboriosam neque dolorem, quae commodi labore. Perferendis aspernatur voluptates minima iusto, nostrum provident fugit nisi sit, hic amet laborum dignissimos? Totam quaerat optio accusamus explicabo eveniet, iste eligendi eius aut accusantium id magnam numquam ipsum labore aliquid sed libero est dicta ipsam veritatis architecto quam minima. Sequi rerum ut sunt ipsum quibusdam odit tempore odio quaerat facere inventore vero veniam nulla dignissimos, cumque ea officiis iure. Molestias veritatis qui temporibus laudantium tenetur cumque eius enim suscipit sed dicta. Neque iure sunt tenetur facere dicta, ipsum nemo deleniti fugit debitis, aperiam eveniet et at assumenda perspiciatis totam. Nihil quo impedit odit, eum atque laboriosam deleniti velit quasi molestiae ex voluptates, fugiat obcaecati possimus vero.
    </div>
  );
}

export default Portfolio;