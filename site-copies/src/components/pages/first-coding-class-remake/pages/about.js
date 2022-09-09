import React from 'react';

import { makeLinks } from '../pages-list';

import SkewedImage from "../../../../../static/images/coding-class/about-us.jpg";
import ChefImage from "../../../../../static/images/coding-class/chef.jpg";
import Fries1 from "../../../../../static/images/coding-class/fries-sq-1.jpg";
import Fries2 from "../../../../../static/images/coding-class/fries-sq-2.jpg";

import SkewedHeader from '../helpers/skewed-header';

export default function() {
    return (
        <div className='about-page'>
            <SkewedHeader header="About Us" image={SkewedImage} />

            <div className="page-container">
                <div className="content">
                    <img src={ChefImage} alt="" className="chef" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, repellat sequi. Placeat deleniti ipsum ea temporibus, obcaecati dolorum ipsa ut repellat, in eveniet quos dolore excepturi omnis perspiciatis ipsam alias quae officiis! Doloremque, asperiores. Veniam rerum voluptas unde nostrum sequi quo magnam optio fuga pariatur voluptates, facilis ea mollitia libero iusto ducimus nulla molestias sit obcaecati. Animi perferendis reprehenderit id nostrum! Laborum molestias autem similique eius optio amet numquam voluptate dicta adipisci eum nulla ipsum aut at temporibus mollitia accusantium facere dignissimos voluptatibus, corrupti consequatur. A odio sint dicta qui culpa, amet quis dolore exercitationem laboriosam obcaecati, possimus optio expedita ab harum recusandae sequi autem tempore, molestias facere fuga deserunt rerum. Ea tempore minus, modi, laudantium commodi fugit tempora quas placeat dolorum corporis ipsam. Sint itaque voluptatum quam nulla libero fugiat, quo facilis dolorum ducimus reprehenderit aspernatur incidunt in architecto, odit adipisci soluta expedita et doloremque eius, totam cum ipsum. Officiis aliquid ea quis nihil accusantium, quidem provident optio quibusdam distinctio! Sint facere, expedita voluptatibus architecto sequi, quo ea commodi deleniti velit hic voluptate, sapiente tempore? Atque, hic molestias id ab iste velit repudiandae sed eaque nihil maiores reiciendis numquam ea quos facilis vel debitis officiis consequatur expedita excepturi odit.</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum a facere minima similique minus voluptatum maiores repellat debitis eveniet. In a veritatis sunt incidunt aspernatur quam error corrupti, ratione, iusto necessitatibus, qui vel temporibus quisquam! Minus et voluptate laboriosam nam officia quod possimus similique quis rem? Molestiae natus, officiis accusantium excepturi error quisquam possimus sequi reiciendis architecto nostrum beatae esse ex inventore quas consequuntur ipsum voluptates exercitationem enim maiores saepe veritatis. Doloremque, nesciunt saepe consequatur harum quos quam cum. Unde, voluptatibus voluptatum! Deleniti repellat voluptates sapiente quisquam placeat debitis soluta cumque aspernatur adipisci optio voluptatum a, sit culpa ex quo veniam, mollitia reiciendis eligendi ea fugit expedita. Qui consequatur aut ipsum ea est harum et id maiores porro. Blanditiis voluptates consectetur, dolorem asperiores magni rem eius illo laborum. Tempore, est saepe. Sunt nihil assumenda laborum voluptas culpa illo eligendi et adipisci iste temporibus. At saepe odit laborum ex voluptatem exercitationem doloribus itaque velit et, optio explicabo voluptatum eaque molestiae harum aut hic. Nobis, quidem voluptates! Porro voluptas repudiandae molestias nihil nesciunt optio, reprehenderit recusandae magnam id. Eos rem est eum, voluptatibus libero veritatis fugiat tempora repudiandae soluta labore aspernatur magnam, ratione optio, ad doloremque facilis quos eius molestiae deserunt nihil itaque odio amet ab. Vitae distinctio hic, eum voluptas iste culpa inventore amet odit reiciendis modi omnis, quae deleniti ullam laudantium sunt nemo aliquam expedita recusandae voluptatum? Suscipit necessitatibus, vitae esse doloremque illo debitis, natus ad rerum mollitia animi architecto at? Repellat veritatis perferendis laudantium aperiam delectus ab ex iste cupiditate magni, aliquid quo quia quasi quos fugiat et corrupti libero nesciunt quam debitis voluptas. Fuga odit veritatis ipsa ad quia id ab minima iure eaque fugit, rerum porro quo dolorem quam dicta sapiente vel veniam ipsum delectus doloremque maxime ipsam a ratione! Quod accusantium ducimus nihil tempore quaerat natus quas dolor id ipsa cum tempora nisi aliquid a, quos inventore voluptates magnam. Illo doloremque aut nobis dolor. Sint natus repellendus autem. Ipsum nihil nemo voluptate impedit excepturi earum molestias deleniti sequi velit architecto unde iusto ea possimus rerum soluta laudantium eaque voluptatum, veritatis fugit incidunt quibusdam itaque quam? Tenetur?</p>
                </div>
            </div>

            <div style={{
                    height: "60px"
                }}></div>

            <div className="squares-wrapper">
                <div className="squares">
                    <div className="square">
                        <div className="square-image-wrapper">
                            <img src={Fries1} alt="" />
                        </div>

                        <div className="square-content">
                            <h1 className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                            <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, quod dolore? Quibusdam non, dolorem odit vel consequuntur temporibus distinctio eveniet. Maxime totam adipisci quod ducimus earum incidunt esse inventore dolore a voluptatibus, eligendi minus atque est veritatis nostrum ex! At accusantium ad harum veniam natus eos soluta architecto atque quidem!</p>
                        </div>
                    </div>

                    <div className="square reversed">
                        <div className="square-content">
                            <h1 className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                            <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, quod dolore? Quibusdam non, dolorem odit vel consequuntur temporibus distinctio eveniet. Maxime totam adipisci quod ducimus earum incidunt esse inventore dolore a voluptatibus, eligendi minus atque est veritatis nostrum ex! At accusantium ad harum veniam natus eos soluta architecto atque quidem!</p>
                        </div>

                        <div className="square-image-wrapper">
                            <img src={Fries2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}