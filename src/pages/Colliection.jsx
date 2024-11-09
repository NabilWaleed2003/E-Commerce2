import React, { useContext, useEffect, useState } from 'react'
import Titles from '../components/Titles';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Currency from '../context/Currency';
import { Post } from 'react-axios';
import { ShopContexts } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';


const Colliection = () => {

  const [showfilter, setShowFilter] = useState(false);

  const{ search , showsearch , setSelectedProduct ,products} = useContext(ShopContexts)

   // 1. تخزين المنتجات والفلترات في state
  const[AllProduct ,  setAllProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({ 
    category: [],
    subCategory: [],
    price: '',
  });

  // const navigate = useNavigate();


  const handleProductClick = (Post) => {
    setSelectedProduct(Post)
  };


// 2. جلب المنتجات من الـ API
  useEffect(()=>{
    axios.get("data.json")
    .then(response => {
      setAllProduct(response.data);
      setFilteredProducts(response.data);
      
  })
  .catch(error => console.error('Error fetching projects', error))
} , []);

// 3. تحديث قيم الفلاتر بناءً على المدخلات

// بالتأكيد! دعني أشرح بالتفصيل كيفية عمل الدالة handleCheckboxChange خطوة بخطوة.

// الدالة handleCheckboxChange:
// هذه الدالة تُستخدم لمعالجة تغييرات checkbox عندما يقوم المستخدم بتحديد أو إلغاء تحديد خيار معين. الهدف من هذه الدالة هو تحديث حالة (state) الفلاتر لتشمل القيم التي يحددها المستخدم عبر مربعات الاختيار (checkboxes).

// شرح الشيفرة سطرًا بسطر:
// jsx
// Copy code
// const handleCheckboxChange = (e) => {
//     const { name, value, checked } = e.target;
// e.target: هذا هو العنصر الذي تم التفاعل معه، وهو الـ checkbox الذي قام المستخدم بالنقر عليه.
// const { name, value, checked } = e.target;:
// name: الاسم الذي نستخدمه لتحديد نوع الفلتر. مثلاً، يمكن أن يكون categories أو priceRanges.
// value: القيمة المحددة لهذا الـ checkbox. مثلاً، يمكن أن تكون electronics أو 0-50.
// checked: قيمة منطقية (true أو false) تحدد ما إذا كان الـ checkbox محددًا (checked) أو غير محدد (unchecked).
// منطق تحديث الفلاتر:
// jsx
// Copy code
// setFilters(prevFilters => {
//     const updatedFilters = { ...prevFilters };
// setFilters: تُستخدم لتحديث الـ state الذي يخزن الفلاتر.
// prevFilters: تشير إلى الحالة الحالية للفلاتر قبل التحديث. نستخدمها للحصول على القيم الحالية للـ state.
// const updatedFilters = { ...prevFilters };: نقوم بعمل نسخة من prevFilters حتى نتمكن من تعديلها دون التأثير مباشرةً على الحالة الحالية. هذه طريقة شائعة في React للتأكد من عدم تغيير الـ state الأصلي مباشرةً.
// منطق إضافة أو إزالة الفلاتر:
// إضافة الفلتر إذا كان checkbox محددًا (checked):
// jsx
// Copy code
// if (checked) {
//     updatedFilters[name] = [...prevFilters[name], value];
// } 
// if (checked): تحقق ما إذا كان الـ checkbox قد تم تحديده.
// updatedFilters[name] = [...prevFilters[name], value];:
// إذا كان الـ checkbox محددًا، نقوم بإضافة قيمة هذا الـ checkbox (أي value) إلى القائمة الموجودة بالفعل في updatedFilters[name].
// prevFilters[name] يحتوي على قائمة القيم الحالية المرتبطة بالاسم (مثل categories أو priceRanges).
// [...prevFilters[name], value]: نقوم بإنشاء قائمة جديدة تحتوي على القيم السابقة، ونضيف إليها القيمة الجديدة.
// إزالة الفلتر إذا كان checkbox غير محدد (unchecked):
// jsx
// Copy code
// else {
//     updatedFilters[name] = prevFilters[name].filter(item => item !== value);
// }
// else: هذا الجزء يتم تنفيذه إذا كان الـ checkbox غير محدد.
// updatedFilters[name].filter(item => item !== value);:
// نقوم بإنشاء قائمة جديدة تحتوي فقط على العناصر التي لا تساوي القيمة التي ألغيت تحديدها (value).
// .filter(): تقوم بتصفية القائمة بحيث تستبعد العنصر الذي قام المستخدم بإلغاء تحديده.
// هذا يعني أنه سيتم إزالة الفلتر المحدد من قائمة الفلاتر.
// تحديث الحالة النهائية:
// jsx
// Copy code
// return updatedFilters;
// تعيد الدالة الكائن المحدث updatedFilters، مما يؤدي إلى تحديث الحالة setFilters بالفلترات الجديدة.
// مثال عملي للتوضيح:
// افترض أن لديك الفلترات التالية في حالتك الحالية:

// jsx
// Copy code
// filters = {
//     categories: ['electronics'],
//     priceRanges: ['0-50']
// }
// إذا قام المستخدم بتحديد checkbox للفئة clothing:
// name = "categories", value = "clothing", checked = true

// الكود يقوم بإضافة "clothing" إلى قائمة categories.

// ستكون الحالة الجديدة:

// jsx
// Copy code
// filters = {
//     categories: ['electronics', 'clothing'],
//     priceRanges: ['0-50']
// }
// إذا قام المستخدم بإلغاء تحديد checkbox للفئة electronics:
// name = "categories", value = "electronics", checked = false

// الكود يقوم بإزالة "electronics" من قائمة categories.

// ستكون الحالة الجديدة:

// jsx
// Copy code
// filters = {
//     categories: ['clothing'],
//     priceRanges: ['0-50']
// }
// الهدف من الدالة:
// تساعد هذه الدالة في تحديث قائمة الفلاتر بطريقة ديناميكية بناءً على تفاعل المستخدم مع مربعات الاختيار. سواء قام المستخدم بتحديد خيار جديد أو إلغاء تحديد خيار موجود، سيتم تحديث الفلاتر بشكل صحيح لتستخدم لاحقًا في تصفية قائمة المنتجات.


const handleCheckboxChange = (e) => {
  const { name, value, checked } = e.target;

  setFilters(prevFilters => {
      const updatedFilters = { ...prevFilters };
      if (checked) {
          // إضافة الفلتر
          updatedFilters[name] = [...prevFilters[name], value];
      } else {
          // إزالة الفلتر
          updatedFilters[name] = prevFilters[name].filter(item => item !== value);
      }
      return updatedFilters;
  });


};

const handleSelectChange = (e) => {
  const { name, value } = e.target;
  setFilters({
      ...filters,
      [name]: value
  });
  
};
  // 4. تطبيق الفلترة

const applyFilters = () => {

    let filtered = [...AllProduct];
   filtered = AllProduct.filter(product => {
      const matchesCategory = filters.category.length === 0 || filters.category.includes(product.category);
      const matchesSubCategory = filters.subCategory.length === 0 || filters.subCategory.includes(product.subCategory);

      return matchesCategory && matchesSubCategory  ;


  });
        
  if (filters.price) {
    filtered.sort((a, b) => {
        if (filters.price === 'lowToHigh') {
            return a.price - b.price;
        } else if (filters.price === 'highToLow') {
            return b.price - a.price;
        }
        return 0;
    });
}

if( showsearch && search){
  filtered = filtered.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
}


  setFilteredProducts(filtered);
};

   // تطبيق الفلترة تلقائيًا عند تغيير الفلاتر

useEffect(() => {
  applyFilters();
}, [filters , showsearch, search]);


















  return (
    <div className=' border-t-2 flex flex-col sm:flex-row gap-6 sm:gap-10 pt-10'>
      {/* filter option */}
      <div className=' min-w-60'>
        <p onClick={()=>setShowFilter(!showfilter)} className=' my-2 text-xl flex items-center cursor-pointer gap-2 font-medium'>FILTERS
          <img src='imges/dropdown_icon.png' alt='' className={` h-3 sm:hidden ${showfilter ? 'rotate-90' : ''}`}/>
        </p>

        {/* category filter */}
        <div className={`border border-gray-500 pl-5 mt-6 py-3 ${showfilter ? '' : 'hidden'} sm:block`}>
          <p className='text-sm mb-3 font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-normal text-gray-700 mb-2'>
            <p className=' flex gap-2 items-center '>
            
                <input type="checkbox" id="" name="category" value="Men"  className=' w-3 cursor-pointer' onChange={handleCheckboxChange} /> Men
    
            </p>
          </div>
          <div className='flex flex-col gap-2 text-sm font-normal text-gray-700 mb-2'>
            <p className=' flex gap-2 items-center '>
              <input type="checkbox" id="" name="category" value="Women"  className=' w-3 cursor-pointer'  onChange={handleCheckboxChange} /> Women

            </p>
          </div>
          <div className='flex flex-col gap-2 text-sm font-normal text-gray-700 mb-2 '>
            <p className=' flex gap-2 items-center '>
              <input type="checkbox" id="" name="category" value="Kids"  className=' w-3 cursor-pointer' onChange={handleCheckboxChange}  /> kids
            </p>
          </div>
        </div>
           

           {/* type filter */}
        <div className={`border border-gray-500 pl-5 mt-6 py-3 ${showfilter ? '' : 'hidden'} sm:block`}>
          <p className='text-sm mb-3 font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-normal text-gray-700 mb-2'>
            <p className=' flex gap-2 items-center '>
              <input type="checkbox" id="" name="subCategory" value="Topwear"  className=' w-3 cursor-pointer' onChange={handleCheckboxChange}/> Topwear
            </p>
          </div>
          <div className='flex flex-col gap-2 text-sm font-normal text-gray-700 mb-2'>
            <p className=' flex gap-2 items-center '>
              <input type="checkbox" id="" name="subCategory" value="Bottomwear"  className=' w-3 cursor-pointer' onChange={handleCheckboxChange}/> Bottomwear
            </p>
          </div>
          <div className='flex flex-col gap-2 text-sm font-normal text-gray-700 mb-2 '>
            <p className=' flex gap-2 items-center '>
              <input type="checkbox" id="" name="subCategory" value="Winterwear"  className=' w-3 cursor-pointer' onChange={handleCheckboxChange}/> Winterwear
            </p>
          </div>
        </div>
      </div>
         
         {/* right side */}
      <div className=' flex-1'>
        <div className=' flex justify-between text-base sm:text-2xl mb-4'>
          <Titles text1={'ALL'} text2={'COLLECTIONS'} />

          {/* PRODUCT SORT  */}

          <select className=' border-2 border-gray-400 text-sm px-2'  name="price" onChange={handleSelectChange} >
            <option value='best-price'>Sort by: Relavent</option>
            <option value= 'lowToHigh'>Sort by: Low to High</option>
            <option value='highToLow'>Sort  by: High to Low</option>

          </select>
        </div>

        {/* all product */}

        <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filteredProducts.map((Post)=>
            <>
            
          <Link to={`/product/${Post.id} `}  key={Post.id} className=' cursor-pointer text-gray-700 ' onClick={()=> handleProductClick(Post)} >

            <div className=' overflow-hidden'>
              <img src={Post.url1} alt='' className=' hover:scale-110 transition ease-in-out' />
            </div>
            <p  className=' text-sm pt-3 pb-1'>{Post.name}</p>
            <p className=' text-sm font-medium'>{Currency(Post.price)}</p>
          </Link>
            </>

         )
          }
        </div>

      </div>
    </div>
  )
}

export default Colliection