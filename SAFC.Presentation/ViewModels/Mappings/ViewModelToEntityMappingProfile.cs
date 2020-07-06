
using AutoMapper;
using SAFC.Domain.Core;
using SAFC.Presentation.ViewModels;

namespace AngularASPNETCore2WebApiAuth.ViewModels.Mappings
{
    public class ViewModelToEntityMappingProfile : Profile
    {
        public ViewModelToEntityMappingProfile()
        {
            CreateMap<RegistrationViewModel, User>().ForMember(au => au.UserName, map => map.MapFrom(vm => vm.Email));
            CreateMap<ReservationRequestViewModel, ReservationRequest>().ConstructUsing(s=>new ReservationRequest(s.ID,s.GuestsNumber, s.ReservationDate, s.MenuType,s.Notes));
        }
    }
}
