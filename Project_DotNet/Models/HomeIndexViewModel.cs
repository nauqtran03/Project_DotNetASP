using Project_DotNet.Models.DBModel;

namespace Project_DotNet.Models
{
    public class HomeIndexViewModel
    {
        public List<Category> Categories { get; set; }
        public List<Product> Products { get; set; }
        public List<News> news {  get; set; }
        public List<Partner> Partners { get; set; }
        public List<Contact> Contacts { get; set; }
        public List<Introduction> Introductions { get; set; }
        public List<Banner> Banners { get; set; }

    }
}
