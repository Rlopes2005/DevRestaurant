import { Text, View, ScrollView } from "react-native";
import Constants from 'expo-constants'

import { Banner } from "../componentes/banner";
import { Search } from "../componentes/search";
import { Header } from "../componentes/header";
import { Section } from "../componentes/section";
import {TrendingFoods} from "../componentes/trending";
import { Restaurants } from "../componentes/restaurants";
import { RestaurantVerticalList } from '../componentes/list'

const statusBarHeight = Constants.statusBarHeigh;


export default function Index() {
  return (
    <ScrollView 
    style={{ flex: 1 }}
    className="bg-slate-200"
    showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header/>

        <Banner/>

        <Search/>
      </View>

      <Section
        name="Comida em alta"
        label="Veja mais"
        action={ () => console.log("CLICOU NO VEJA MAIS")}
        size="text-2xl"
      />

      <TrendingFoods/>

      <Section
        name="Famosos no DevFood"
        label="Veja todos"
        action={ () => console.log("CLICOU NO FAMOSOS")}
        size="text-xl"
      />

      <Restaurants/>

      <Section
        name="Restaurantes"
        label="Veja todos"
        action={ () => console.log("CLICOU NO RESTAURANTES")}
        size="text-xl"
      />

      <RestaurantVerticalList/>

    </ScrollView>
  );
}
