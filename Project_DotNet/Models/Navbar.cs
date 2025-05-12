using Microsoft.AspNetCore.Mvc;
namespace Project_DotNet.Models
{
    public class Navbar: ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
