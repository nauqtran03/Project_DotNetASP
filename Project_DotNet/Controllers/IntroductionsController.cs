using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Project_DotNet.Models.DBModel;

namespace Project_DotNet.Controllers
{
    public class IntroductionsController : Controller
    {
        private readonly DevxuongmocContext _context;

        public IntroductionsController(DevxuongmocContext context)
        {
            _context = context;
        }

        // GET: Introductions
        public async Task<IActionResult> Index()
        {
            return View();
        }
        
    }
}
