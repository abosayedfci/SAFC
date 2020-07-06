using SAFC.Domain.Core.Enum;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SAFC.Presentation.ViewModels
{
    public class ReservationRequestViewModel
    {
        public int ID { get; set; }
        public int GuestsNumber { get; set; }
        public DateTime ReservationDate { get; set; }
        public MenuTypeEnum MenuType { get; set; }
        public string Notes { get; set; }
    }
}
