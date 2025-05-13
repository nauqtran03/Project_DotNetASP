using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project_DotNet.Models;
using Project_DotNet.Models.DBModel;

namespace Project_DotNet.Controllers
{
    public class HomeController : Controller
    {
        private readonly DevxuongmocContext _context;
        private readonly ILogger<HomeController> _logger;

        public HomeController(DevxuongmocContext context, ILogger<HomeController> logger)
        {
            _context = context;
            _logger = logger;
        }
        public IActionResult Index()
        {
            var model = new HomeIndexViewModel
            {
                Products = _context.Products.Take(12).ToList(),
                news = _context.News.Take(3).ToList(),
                Categories = _context.Categories.Take(8).ToList()
            };

            return View(model);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
