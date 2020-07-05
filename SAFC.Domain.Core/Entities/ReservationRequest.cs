using System;
using System.Collections.Generic;
using System.Text;
using SAFC.Domain.Core.Enum;
namespace SAFC.Domain.Core
{
  public  class ReservationRequest
    {
        public int ID { get; set; }
        public int GuestsNumber { get; set; }
        public DateTime ReservationDate  { get; set; }
        public MenuTypeEnum MenuType { get; set; }
        public string Notes { get; set; }
    }
}
