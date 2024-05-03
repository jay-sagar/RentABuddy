function CategoryList() {
  const [categoryList, setCategoryList] = useState([]);
  const params = usePathname();
  const category = params.split("/")[2];

  useEffect(() => {
    getCategoryList();
    console.log(params);
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      console.log(resp.data.data);
      setCategoryList(resp.data.data);
    });
  };

  return (
    <div className="h-screen mt-5 flex flex-col">
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="overflow-visible">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {categoryList &&
              categoryList.map((item, index) => (
                <CommandItem key={index}>
                  <Link href={'/search/' + item.attributes.Name}>
                    <a className={`p-2 flex gap-2 text-[14px] text-red-600 items-center rounded-md cursor-pointer w-full ${category === item.attributes.Name && 'bg-red-100'}`}>
                      <Image src={item.attributes?.Icon?.data.attributes?.url} alt="icon" width={25} height={25} />
                      <label>{item.attributes.Name}</label>
                    </a>
                  </Link>
                </CommandItem>
              ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}

export default CategoryList;
